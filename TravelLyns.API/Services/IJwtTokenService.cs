using TravelLyns.API.Models;

namespace TravelLyns.API.Services
{
    public interface IJwtTokenService
    {
        string GenerateToken(ApplicationUser user);
    }
}
