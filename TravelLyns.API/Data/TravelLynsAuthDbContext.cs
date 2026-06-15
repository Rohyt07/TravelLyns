using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TravelLyns.API.Models;

namespace TravelLyns.API.Data
{
    public class TravelLynsAuthDbContext :IdentityDbContext<ApplicationUser>
    {
        public TravelLynsAuthDbContext(DbContextOptions<TravelLynsAuthDbContext> options) : base(options)
        {     
        }

       
       

    }
}
