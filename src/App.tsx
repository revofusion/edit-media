import { useEffect, type FC } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import DashboardPage from "./pages";
import ForgotPasswordPage from "./pages/authentication/forgot-password";
import ProfileLockPage from "./pages/authentication/profile-lock";
import ResetPasswordPage from "./pages/authentication/reset-password";
import SignInPage from "./pages/authentication/sign-in";
import SignUpPage from "./pages/authentication/sign-up";
import EcommerceBillingPage from "./pages/e-commerce/billing";
import EcommerceInvoicePage from "./pages/e-commerce/invoice";
import EcommerceProductsPage from "./pages/e-commerce/products";
import KanbanPage from "./pages/kanban";
import MailingComposePage from "./pages/mailing/compose";
import MailingInboxPage from "./pages/mailing/inbox";
import MailingReadPage from "./pages/mailing/read";
import MailingReplyPage from "./pages/mailing/reply";
import NotFoundPage from "./pages/pages/404";
import ServerErrorPage from "./pages/pages/500";
import MaintenancePage from "./pages/pages/maintenance";
import PricingPage from "./pages/pages/pricing";
import UserFeedPage from "./pages/users/feed";
import UserListPage from "./pages/users/list";
import UserProfilePage from "./pages/users/profile";
import UserSettingsPage from "./pages/users/settings";
import Wrapper from "./layout/wrapper";
import ChatPage from "./pages/chat";
import WebsiteHome from "./pages/website";
import DownloadPage from "./pages/download";
import ManualPage from "./pages/manual";
import { event } from '@os/Event'
import { useDropStore } from "@stores/drop";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Wrapper enableNavbarSidebar={true} authenticated={true}/>}>
        <Route path="/" element={<ManualPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/dashboard" element={<DashboardPage />} index />
        <Route path="/mailing/compose" element={<MailingComposePage />} />
        <Route path="/mailing/inbox" element={<MailingInboxPage />} />
        <Route path="/mailing/read" element={<MailingReadPage />} />
        <Route path="/mailing/reply" element={<MailingReplyPage />} />
        <Route path="/kanban" element={<KanbanPage />} />
        <Route path="/pages/pricing" element={<PricingPage />} />
        <Route path="/pages/maintenance" element={<MaintenancePage />} />
        <Route path="/pages/404" element={<NotFoundPage />} />
        <Route path="/pages/500" element={<ServerErrorPage />} />
        <Route path="/e-commerce/billing" element={<EcommerceBillingPage />} />
        <Route path="/e-commerce/invoice" element={<EcommerceInvoicePage />} />
        <Route path="/e-commerce/products" element={<EcommerceProductsPage />} />
        <Route path="/users/feed" element={<UserFeedPage />} />
        <Route path="/users/list" element={<UserListPage />} />
        <Route path="/users/profile" element={<UserProfilePage />} />
        <Route path="/users/settings" element={<UserSettingsPage />} />
      </Route>

      <Route element={<Wrapper enableNavbarSidebar={false}  authenticated={false} />}>
        <Route path="/authentication/sign-in" element={<SignInPage />} />
        <Route path="/authentication/sign-up" element={<SignUpPage />} />
        <Route path="/authentication/forgot-password"  element={<ForgotPasswordPage />} />
        <Route path="/authentication/reset-password" element={<ResetPasswordPage />} />
        <Route path="/authentication/profile-lock" element={<ProfileLockPage />} />
      </Route>
    </Route>
  )
)

const websiteRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WebsiteHome/>} />
  )
)

const App: FC = function () {
  const dropStore = useDropStore()
  const router = import.meta.env.VITE_IS_WEBSITE
    ? websiteRouter
    : appRouter

  useEffect(() => {
      const unlistenFileDrop = event.listen('tauri://file-drop', (e: any) => dropStore.addFiles(e.payload.paths as string[], router.state.location.pathname))
      const unlistenHover = event.listen('tauri://file-drop-hover', (_: any) => dropStore.setHover(true))
      const unlistenCancelled = event.listen('tauri://file-drop-cancelled', (_: any) => dropStore.setHover(false))

      return function cleanup() {
          unlistenFileDrop.then(unlisten => unlisten())
          unlistenHover.then(unlisten => unlisten())
          unlistenCancelled.then(unlisten => unlisten())
      };
  });

  return (
    <RouterProvider router={router} />
  );
};

export default App;
