document.querySelector('#push').onclick = function (){
    if(document.querySelector('#novatarefa input').value.length == 0){
        alert("Por favor escreva uma tarefa")
    }
    else{
        document.querySelector('#tarefas').innerHTML 
        += `
            <div class="tarefa">
                <span id="taskname">
                    ${document.querySelector
                    ('#novatarefa input').value}
                </span>
                <button class="delete">
                <img src="images/trash-can.png" class="trash-can">
                </button>
            </div>
        `;

        var tarefa_atual = document.querySelectorAll(".delete");
        for(var i=0; i<tarefa_atual.length; i++){
            tarefa_atual[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tarefas = document.querySelectorAll(".tarefa");
        for(var i=0; i<tarefas.length; i++){
            tarefas[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#novatarefa input").value = "";
    }
}
