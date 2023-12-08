import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";
import { JumblesController } from "./controllers/JumblesController.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController, JumblesController],
    view: 'app/views/HomeView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])