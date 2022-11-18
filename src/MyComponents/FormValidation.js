import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function FormValidation() {
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
   // console.log(watch("firstName")); // watch input value by passing the name of it
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' type="text" name="firstName"
                        {...register("firstName", { required: true, maxLength: 10 })} />
                </Form.Field>
                {errors.firstName && <p>Please check the Last name</p>}
                {errors?.firstName && errors.firstName.message}
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' type="text"
                        {...register("lastName", { pattern: /^[A-Za-z]+$/i ,required: true, maxLength: 10 })} />
                </Form.Field>
                {errors.lastName && <p>Please check the Last name</p>}
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' type="email"
                        {...register("email", {
                            required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} />
                </Form.Field>
                {errors.email && <p>Please check the email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type="password"
                        {...register("password", {
                            required: true
                            // , pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })} />
                </Form.Field>
                {errors.password && <p>Please check the Password</p>}
                <Form.Field>
                    <select {...register("language", {required: true})}>
                        <option value="">--Select--</option>
                        <option value="dotnet">.Net</option>
                        <option value="c#">C#</option>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                    </select>
                </Form.Field>
                {errors.language && <p>Please select language</p>}
                <Form.Field>
                    <input type="checkbox" name="chkRememberMe" id="chkRememberMe"
                    {...register("rememberMe")}/>
                </Form.Field>
                {errors.rememberMe && <p>Please check checkbox</p>}
                <Form.Field>
                <label htmlFor="field-rain">
                    <input
                        {...register("weather")}
                        type="radio"
                        name="weather"
                        value="rain"
                        id="field-rain"
                    />
                    Rain
                </label>
                <label htmlFor="field-wind">
                    <input
                        {...register("weather")}
                        type="radio"
                        name="weather"
                        value="wind"
                        id="field-wind"
                    />
                    Lots of wind
                </label>
                <label htmlFor="field-sun">
                    <input
                        {...register("weather")}
                        type="radio"
                        name="weather"
                        value="sun"
                        id="field-sun"
                    />
                    Sunny
                </label>
                </Form.Field>
                <Button type='submit'>Submit</Button>  
            </Form>
        </div>
    )
}
