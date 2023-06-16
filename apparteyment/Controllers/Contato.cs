using apparteyment.Data;
using apparteyment.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace apparteyment.Controllers
{
    public class ContatoController : Controller
    {
        private readonly AplicationDBContext _Db;

        public ContatoController(AplicationDBContext db)
        {
            _Db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<ContactModel> contacts = _Db.ContactDB;
            return View(contacts);
        }
        public IActionResult Criar()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Criar(ContactModel contact)
        {
            if (ModelState.IsValid)
            {
                _Db.ContactDB.Add(contact);
                _Db.SaveChanges();

                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpGet]
        public IActionResult Editar(int? ID)
        {
            if (ID == null || ID == 0)
            {
                return NotFound();
            }

            ContactModel contact = _Db.ContactDB.FirstOrDefault(x => x.ID == ID);

            if (contact == null)
            {
                return NotFound();
            }

            return View(contact);
        }

        [HttpPost]
        public IActionResult Editar(ContactModel contact)
        {
            if (ModelState.IsValid)
            {
                ContactModel existingContact = _Db.ContactDB.FirstOrDefault(x => x.ID == contact.ID);

                if (existingContact == null)
                {
                    return NotFound();
                }

                // Atualize as propriedades do contato existente com os valores do objeto 'contact'
                existingContact.Nome = contact.Nome;
                existingContact.Email = contact.Email;
                existingContact.Numero = contact.Numero;

                _Db.SaveChanges();

                return RedirectToAction("Index");
            }

            // Se a validação do modelo falhar, retorne a visualização de edição com o objeto 'contact' para exibir os erros
            return View(contact);
        }


        [HttpGet]
        public IActionResult ApagarConfirmacao(int? ID)
        {
            if (ID == null || ID == 0)
            {
                return NotFound();
            }

            ContactModel contact = _Db.ContactDB.FirstOrDefault(x => x.ID == ID);

            if (contact == null)
            {
                return NotFound();
            }

            return View(contact);
        }

        [HttpPost]
        public IActionResult Apagar(int? ID)
        {
            if (ID == null || ID == 0)
            {
                return NotFound();
            }

            ContactModel contact = _Db.ContactDB.FirstOrDefault(x => x.ID == ID);

            if (contact == null)
            {
                return NotFound();
            }

            _Db.ContactDB.Remove(contact);
            _Db.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}
