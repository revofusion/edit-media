/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, type FC } from "react";
import { auth } from "@class/api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import * as Sentry from "@sentry/browser";

const SignInPage: FC = function () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const signInWithEmail = async () => {
    if (loading) {
      return
    }

    try {
      setLoading(true)
      setError('')

      await signInWithEmailAndPassword(auth, email, password)
      if (!auth.currentUser.emailVerified) {
        throw new Error('Email not verified. Check your email to verify first.')
      }

      navigate('/')
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      setError(errorMessage.replace('Firebase: ', ''))
      console.error(errorCode, errorMessage)
      Sentry.captureException(e);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <Link to="/authentication/sign-in" className="my-6 flex items-center gap-x-1 lg:my-0">
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white dark:text-white">
          Edit Media
        </span>
      </Link>
      <Card
        horizontal
        imgSrc="/images/authentication/login.jpg"
        imgAlt=""
        className="w-full md:max-w-[1024px] md:[&>*]:w-full md:[&>*]:p-16 [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 lg:[&>img]:block"
      >
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
          Sign In
        </h1>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <Link to="/authentication/forgot-password">
              Lost Password?
            </Link>
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full lg:w-auto" onClick={signInWithEmail} disabled={loading}>
              Login to your account
            </Button>

            {error && (
              <p className="mt-3 text-sm text-red-700 dark:text-red-300">
                {error}
              </p>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <Link to="/authentication/sign-up" className="text-primary-600 dark:text-primary-300">
              Create account
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
