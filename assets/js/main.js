// La nostra todo list avrá alcune tasks di default predefinite
// L'utente puó inserire nuove tasks
// Cliccando sulla "X" l'utente puó cancellare una task
// Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
// Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante
// add o preme il taso Enter della tastiera.
// Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.


let app = new Vue({
    el: '#app',
    data: {
        tasksPresenti: ['Do something', 'Do else', 'Do something else'],
        nuovaTask: '',
        tasksDefault: 3
    },
    methods: {
        aggiungiTask() {
            if(this.nuovaTask.length > 6) {
                this.tasksPresenti.push(this.nuovaTask);
                this.nuovaTask = '';
                this.tasksDefault = 3;                
            }
        },
        rimuoviTask(index) {
            this.tasksPresenti.splice(index, 1);
            if(this.tasksPresenti.length === 0){
                this.tasksDefault = 0;
            }
        }
    }
});