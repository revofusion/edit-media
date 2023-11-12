/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState, type FC } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import * as Sentry from "@sentry/browser";

import Logo from "@components/Logo";
import { auth } from "@class/api/firebase";

const ForgotPasswordPage: FC = function () {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetEmailSent, setResetEmailSent] = useState(false)

  const resetPassword = async () => {
    if (loading) {
      return
    }

    try {
      setError('')
      setLoading(true)
      await sendPasswordResetEmail(auth, email)
      setResetEmailSent(true)
    } catch (e) {
      const errorCode = e.code;
      const errorMessage = e.message;
      console.error(errorCode, errorMessage)
      setError(errorMessage.replace('Firebase: ', ''))
      Sentry.captureException(e);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12">
      <a href="/" className="my-6 flex items-center gap-x-1 lg:my-0">
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white dark:text-white">
          Edit Media
        </span>
      </a>
      <Card className="w-full lg:max-w-[640px] lg:[&>*]:w-full lg:[&>*]:p-16">
          {!resetEmailSent ? (
            <div>
              <h1 className="text-2xl font-bold dark:text-white md:text-3xl">
                Forgot your password?
              </h1>
              <p className="mt-3 mb-6 text-gray-500 dark:text-gray-300">
                Don't fret! Just type in your email and we will send you a code to
                reset your pasword!
              </p>

              <form>
                <div className="mb-6 flex flex-col gap-y-3">
                  <Label htmlFor="email">Your email</Label>
                  <TextInput
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <Button onClick={resetPassword} type="submit" className="w-full lg:w-auto" disabled={loading}>
                    Reset password
                  </Button>

                  {error && (
                    <p className="mt-3 text-sm text-red-700 dark:text-red-300">
                      {error}
                    </p>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Know your password? &nbsp;
                  <Link to="/authentication/sign-in" className="text-primary-600 dark:text-primary-300">
                    Go to sign in
                  </Link>
                </p>
              </form>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold dark:text-white md:text-3xl">
                Password Reset Email Sent
              </h1>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                Check your email for reset link. <br/>
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                Once you have reset your password, 
                <Link to="/authentication/sign-in" className="ml-1 text-primary-600 dark:text-primary-300">
                  Go to sign in
                </Link>
              </p>
            </div>
          )}
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
