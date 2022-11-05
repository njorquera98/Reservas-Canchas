import './Sign-In.css';

function SignIn() {
  return (
    <div className="Sign-In">
        <form id="formLogin" action="/login" method="POST">
            <div class="form-floating">
                <input type="text" class="form-control" id="user" name="user" placeholder="User"/>
                <label for="user">Usuario</label>
            </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="password" name="password" placeholder="Password"/>
      <label for="pass">Contraseña</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>    
    </form>
    </div>
  );
}

export default SignIn;
