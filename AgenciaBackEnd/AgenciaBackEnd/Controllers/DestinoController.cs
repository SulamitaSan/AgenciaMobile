using AgenciaBackEnd.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AgenciaBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinoController : ControllerBase
    {
        private readonly DestinoDBContext _Context;
        public DestinoController(DestinoDBContext Context)
        {
            _Context = Context;
        }

        //GET: api/Destino - Lista todos os destinos
        [HttpGet]
        public IEnumerable<Destino> GetDestino()
        {
            return _Context.Destino;
        }

        //GET: api/Cursos/id - Lista curso por ID
        [HttpGet("{id}")]
        public IActionResult GetDestinoPorId(int id)
        {
            Destino destino = _Context.Destino.SingleOrDefault(modelo => modelo.Id == id);
            if (destino == null)
            {
                return NotFound();
            }
            return new ObjectResult(destino);
        }

        // Cria uma novo destino

        [HttpPost]
        public IActionResult CriarDestino(Destino item)
        {
            if(item == null)
            {
                return BadRequest();
            }

            _Context.Destino.Add(item);
            _Context.SaveChanges();
            return new ObjectResult(item);

            // return CreatedAtAction("GetDestino" , new { id = item.ID }, item);
        }

        //Atualizar destino
        [HttpPut("{id}")]
        public IActionResult AtualizaDestino(int id, Destino item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _Context.Entry(item).State = EntityState.Modified;
            _Context.SaveChanges();

            return new NoContentResult();
        }

        // Apagar destino
        [HttpDelete("{id}")]
        public IActionResult DeletaDestino(int id)
        {
            var destino = _Context.Destino.SingleOrDefault(m => m.Id == id);

            if (destino == null)
            {
                return BadRequest();
            }

            _Context.Destino.Remove(destino);
            _Context.SaveChanges();
            return Ok(destino);
        }
    }
}
