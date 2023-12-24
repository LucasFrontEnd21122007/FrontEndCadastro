function registerUser(){
    const nickname = document.getElementById('users').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userData = {
        username: username,
        email: email,
        password:password,
        nickname:nickname
    };
    fetch('URL_DA_SUA_API_DE_CADASTRO', {
        method:'POST',
        headers:{
            'content-type':'application-json',
        },
        body:JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data =>{
        console.log("cadastro bem sucedido", data);
        alert("cadastro feito com sucesso");
    })
    .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    });
}