namespace SafeXCandidatePortal.Api.Models;

public class CandidateCreateRequest
{
    public string Name { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Status { get; set; } = "New Application";
    public string Email { get; set; } = string.Empty;
    public string Experience { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
}