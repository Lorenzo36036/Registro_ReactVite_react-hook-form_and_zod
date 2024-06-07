import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { SchemaValidation } from "./validations/shemaValidations"
import "./style/registro.css"

 function App() {
    
  const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: zodResolver(SchemaValidation) })


    const onSubmit = (data) => { console.log(data) }
 

  return (

    <div className='w-full h-screen flex'>
            <Card className="max-w-xl w-full m-auto bg-gray-100">
            
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                     
                <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Nombre" value="Nombre" />
                        </div>
                        <TextInput id="Nombre" type="text" placeholder="Nombre"
                            {...register('nombre')} />
                        {
                            errors.nombre?.message && <p className='error-message'>{errors.nombre?.message} </p>
                        }
                        
                         <div className="mb-2 block">
                            <Label htmlFor="Apellido" value="Apellido" />
                        </div>
                        <TextInput id="Apellido" type="text" placeholder="Apellido"
                            {...register('apellido')} />
                        {
                            errors.apellido?.message && <p className='error-message'>{errors.apellido?.message} </p>
                        }
                        </div>

                        <div>
                        <div className="mb-2 block">
                            <Label htmlFor="cedula" value="Cedula" />
                        </div>
                        <TextInput id="cedula" type="text"
                            {...register('cedula')} placeholder="Cedula" />
                        {
                            errors.cedula?.message && <p className='error-message'>{errors.cedula?.message} </p>
                        }
                    </div> 

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Telefono" value="Telefono" />
                        </div>
                        <TextInput id="telefono" type="text"
                            {...register('telefono')} placeholder="Telefono" />
                        {
                            errors.telefono?.message && <p className='error-message'>{errors.telefono?.message} </p>
                        }
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="Email" value="Email" />
                        </div>
                        <TextInput id="Email" type="email" placeholder="Email"
                            {...register('email')} />
                        {
                            errors.email?.message && <p className='error-message'>{errors.email?.message} </p>
                        }
                    </div>


                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Password" />
                        </div>
                        <TextInput id="password" type="password"
                            {...register('password')} placeholder="Password" />
                        {
                            errors.password?.message && <p className='error-message'>{errors.password?.message} </p>
                        }
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Confirmar Password" />
                        </div>
                        <TextInput id="password" type="password"
                            {...register('confirmarPassword')} placeholder="Password" />
                        {
                            errors.confirmarPassword?.message && <p className='error-message'>{errors.confirmarPassword?.message} </p>
                        }
                    </div>



                    <div className="flex items-center gap-2">
                    
                    <Checkbox id="agree" />
                   <Label htmlFor="agree" className="flex">
                      Acepto terminos y condiciones    
                   </Label>
                  </div>
                    
                    <Button type="submit">Registrar</Button>
                    <p className="text-center"> ya tienes cuenta? Login</p>
                </form>
            </Card>
        </div>
  )
  
}


export default App
