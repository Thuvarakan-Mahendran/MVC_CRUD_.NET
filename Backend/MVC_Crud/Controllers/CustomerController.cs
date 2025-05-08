using Microsoft.AspNetCore.Mvc;         //[Route], [ApiController], [HttpGet], ControllerBase, ActionResult, BadRequest, NotFound, etc., which are fundamental for building web APIs
using Microsoft.EntityFrameworkCore;    //Entity Framework Core features like DbContext, DbSet<T>, ToListAsync(), FindAsync(), EntityState, DbUpdateConcurrencyException, etc., for database interactions
using MVC_Crud.Data;
using MVC_Crud.Models;

namespace MVC_Crud.Controllers
{
    [Route("api/[controller]")] //controller will be replaced with Customer in CustomerController name
    [ApiController]             //enables several API-specific conventions, such as automatic HTTP 400 responses when model validation fails
    public class CustomerController : ControllerBase    //inherits
    {
        private readonly ApplicationDbContext _context;     //why it is readonly????
        public CustomerController(ApplicationDbContext context) //ApplicationDbContext (your database access layer)
        {
            _context = context;
        }
        [HttpGet]   //"api/Customer"
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()   //async Task used as to avoid blocking the request thread        and         allows returning either an IActionResult (like BadRequest(), NotFound()) or the actual data type T
        {
            if (_context.Customers == null)
            {
                return NotFound();
            }
            return await _context.Customers.ToListAsync();
        }
        [HttpPost]  //"api/Customer"
        public async Task<ActionResult<Customer>> SaveCustomer(Customer customer)
        {
            if (_context.Customers == null)
            {
                return BadRequest("There is no customers");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.Customers.Add(customer);   // tracking the new customer object and mark its state as Added
            await _context.SaveChangesAsync();
            return customer;
        }

        [HttpPut("{id}")]   //"api/Customer/{id value}"
        public async Task<IActionResult> UpdateCustomer(int id, Customer customer)
        {
            if (id != customer.Id)
            {
                return BadRequest("consistency issue with id");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            _context.Entry(customer).State = EntityState.Modified;  //provided customer object represents an existing entity that has been modified
            try
            {
                await _context.SaveChangesAsync();  // EF Core will then generate an SQL UPDATE statement for all properties of this entity
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await CustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    return Conflict();
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")] //"api/Customer/{id value}"
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            if (_context.Customers == null)
            {
                return BadRequest("There is no customers");
            }
            var customer = await _context.Customers.FindAsync(id);  //FindAsync -> Efficiently finds a customer by its primary key (id). It first checks if the entity is already tracked by the context and returns it if so, otherwise, it queries the database
            if (customer == null)
            {
                return NotFound();
            }
            _context.Customers.Remove(customer);    //Marks the found customer entity for deletion. Its state is set to Deleted
            await _context.SaveChangesAsync();  // Sends the SQL DELETE command to the database to remove the record
            return NoContent();
        }

        private async Task<bool> CustomerExists(int id)
        {
            return _context.Customers != null && await _context.Customers.AnyAsync(e => e.Id == id);    //AnyAsync -> queries the database to see if any record exists that matches the condition (e.Id == id)
        }
    }
}
