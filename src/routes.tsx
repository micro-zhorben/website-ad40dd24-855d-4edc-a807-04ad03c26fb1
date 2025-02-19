import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Silly } from "./pages/silly";
import { VerySilly } from "./pages/very-silly";
import { SillyHeader } from "./components/silly-header";
import { SillyFooter } from "./components/silly-footer";

const Routes = () => (
  <div className="relative min-h-screen">
    <SillyHeader />
    <main className="container py-6">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/silly" element={<Silly />} />
        <Route path="/very-silly" element={<VerySilly />} />
      </RouterRoutes>
    </main>
    <SillyFooter />
  </div>
);

export { Routes };