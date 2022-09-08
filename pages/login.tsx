import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Head from 'next/head'
import Image from 'next/image'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password)
    } else {
      await signUp(email, password)
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Login - Netflix Clone</title>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        alt="Logo Netflix"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Entrar</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="E-mail"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Por favor digite um email válido.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Senha"
              className="input"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Sua senha deve conter entre 4 e 60 caracteres.
              </p>
            )}
          </label>
        </div>

        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Entrar
        </button>

        <div className="text-[gray]">
          Novo por aqui?{' '}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Assine agora.
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
