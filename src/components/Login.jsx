import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { HandleLogin } from './HandleLogin';
import { Textbox } from './Textbox';

export function Login() {
  const { handleSubmit, handleChange, formData , showPassword , toggleShowPassword} = HandleLogin();

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Textbox
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <Textbox
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <div className='flex justify-center items-center gap-2 font-semibold'>
          <Checkbox onChange={toggleShowPassword} checked={showPassword} /> <span>Mostra Password</span>
        </div>

        <Button type="submit" text="Login" />
      </form>
    </div>
  );
}
