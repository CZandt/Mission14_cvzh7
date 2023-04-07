using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission13_backend.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission13_backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private JoelHiltonMovieCollectionContext context;

        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movies> Get()
        {
            return context.Movies.ToArray();
        }
    }
}
