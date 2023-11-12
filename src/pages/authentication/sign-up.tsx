/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useState, type FC } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "@class/api/firebase";
import TermsOfServiceModal from "../../components/TermsOfServiceModal";
import Logo from "../../components/Logo";
import * as Sentry from "@sentry/browser";

const SignUpPage: FC = function () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [error, setError] = useState('')
  const [tosOpen, setTosOpen] = useState(false)
  const [needToVerifyEmail, setNeedToVerifyEmail] = useState(false)

  const signUpWithEmail = async () => {
    if (loading) {
      return
    }

    if (!termsAccepted) {
      return
    }

    try {
      setLoading(true)
      setError('')

      await createUserWithEmailAndPassword(auth, email, password)
      await sendEmailVerification(auth.currentUser)
      setNeedToVerifyEmail(true)
      await signOut(auth)
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
      <Link to="/authentication/sign-in" className="my-6 flex items-center gap-x-1 lg:my-0">
        <Logo />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white dark:text-white">
          Edit Media
        </span>
      </Link>
      <Card
        horizontal
        imgSrc="/images/authentication/create-account.jpg"
        imgAlt=""
        className="w-full md:max-w-[1024px] md:[&>*]:w-full md:[&>*]:p-16 [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 lg:[&>img]:block"
      >
        <div>
          <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">
            { needToVerifyEmail ? 'Sign up successful!' : 'Create a Free Account' }
          </h1>
          <form>
            {!needToVerifyEmail && (
              <div>
                <div className="mb-4 flex flex-col gap-y-3">
                  <Label htmlFor="email">Your email</Label>
                  <TextInput
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    type="email"
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6 flex items-center gap-x-3">
                  <Checkbox id="acceptTerms" name="acceptTerms" onChange={(e) => setTermsAccepted(e.target.checked)} />
                  <Label htmlFor="acceptTerms">
                    I accept the&nbsp;
                    <a onClick={() => setTosOpen(true)} className="text-primary-700 dark:text-primary-200">
                      Terms and Conditions
                    </a>
                  </Label>
                </div>
                <div className="mb-6">
                  <Button type="submit" className="w-full lg:w-auto" onClick={signUpWithEmail} disabled={loading || !termsAccepted}>
                    Create account
                  </Button>

                  {error && (
                    <p className="mt-3 text-sm text-red-700 dark:text-red-300">
                      {error}
                    </p>
                  )}
                </div>
              </div>
            )}

            <p className="text-sm text-gray-500 dark:text-gray-300">
              { needToVerifyEmail ? 'Check your email for verification link before you' : 'Already have an account?' }&nbsp;
              <Link to="/authentication/sign-in" className="text-primary-600 dark:text-primary-300">
                Login here
              </Link>
            </p>
          </form>
        </div>

      </Card>

      <TermsOfServiceModal isOpen={tosOpen} setOpen={setTosOpen} />
    </div>
  );
};

export default SignUpPage;
