import { User } from "../../../models/user";



<form
autoComplete="off"
onSubmit={handleSubmit}

>
<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="text"
    autoComplete="off"
    id="email"
    value={formData.email}
    name="email"
    onChange={handleChange} 
    class="form-control"
    aria-describedby="emailHelp" />
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input  type="password"
    autoComplete="off"
    id="password"
    value={formData.pw}
    name="pw"
    onChange={handleChange}
    class="form-control" />
</div>
<div>
  <button class="btn btn-primary m-1 ">Log In</button>
  <Link to="/">
    <button class="btn btn-danger m-1">Cancel</button>
  </Link>
</div>
</form>