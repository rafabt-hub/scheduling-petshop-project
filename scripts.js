document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModal");
  const modal = document.getElementById("agendamentoModal");
  const confirmBtn = document.getElementById("confirm");
  const closeModal = () => {
      modal.style.display = "none";
      overlay.style.display = "none";
      document.getElementById("name").value = "";
      document.getElementById("namepet").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("description").value = "";
      document.getElementById("date").value = "";
      document.getElementById("hour").value = "";
  };
  
  // Ocultar form incialmente
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "40%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.background = "#1E1E1E";
  modal.style.padding = "20px";
  modal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
  modal.style.zIndex = "1000";
  modal.style.borderRadius = "10px";
  
  // Config form
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.background = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "none";
  overlay.style.zIndex = "999";
  document.body.appendChild(overlay);
  
  // Exibir form 
  openModalBtn.addEventListener("click", () => {
      modal.style.display = "block";
      overlay.style.display = "block";
  });
  
  // Fechar form
  overlay.addEventListener("click", () => {
      closeModal();
  });
  
  // Bloquear datas e horários 
  const dateInput = document.getElementById("date");
  const hourInput = document.getElementById("hour");
  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("min", today);
  
  confirmBtn.addEventListener("click", function (event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const pet = document.getElementById("namepet").value;
      const phone = document.getElementById("phone").value;
      const description = document.getElementById("description").value;
      const date = dateInput.value;
      const hour = hourInput.value;
      
      if (!name || !pet || !phone || !description || !date || !hour) {
          alert("Preencha todos os campos!");
          return;
      }
      
      const [hh, mm] = hour.split(":");
      const timeNumber = parseInt(hh);
      let periodContainer;
      
      if (timeNumber >= 9 && timeNumber < 12) {
          periodContainer = document.querySelector(".morning-period").nextElementSibling;
      } else if (timeNumber >= 13 && timeNumber < 18) {
          periodContainer = document.querySelectorAll(".morning-period")[1].nextElementSibling;
      } else if (timeNumber >= 18 && timeNumber <= 22) {
          periodContainer = document.querySelectorAll(".morning-period")[2].nextElementSibling;
      } else {
          alert("Horário inválido!");
          return;
      }
      
      const newAppointment = document.createElement("div");
      newAppointment.classList.add("morning");
      newAppointment.innerHTML = `
          <h2>${hour}</h2>
          <h3>${pet} /<span>${name}</span></h3>
          <p>${description}</p>
          <a href="#" class="remove">Remover agendamento</a>
      `;
      
      // Adicionar agendamento e ordenar por horário
      const appointments = Array.from(periodContainer.parentNode.querySelectorAll(".morning"));
      appointments.push(newAppointment);
      appointments.sort((a, b) => {
          const timeA = a.querySelector("h2").textContent;
          const timeB = b.querySelector("h2").textContent;
          return timeB.localeCompare(timeA);
      });
      
      periodContainer.parentNode.querySelectorAll(".morning").forEach(el => el.remove());
      appointments.forEach((el, index) => {
          if (index > 0) {
              el.style.borderRadius = "0";
          } else {
              el.style.borderRadius = "0 0 .5rem .5rem";
          }
          periodContainer.parentNode.insertBefore(el, periodContainer.nextElementSibling);
      });
      
      newAppointment.querySelector(".remove").addEventListener("click", function (event) {
          event.preventDefault();
          newAppointment.remove();
      });
      
      closeModal();
  });
  
  // Filtro por data
  document.querySelector(".custom-date input").addEventListener("change", function () {
      const selectedDate = this.value;
      document.querySelectorAll(".morning").forEach(appointment => {
          appointment.style.display = appointment.dataset.date === selectedDate ? "block" : "none";
      });
  });
});
