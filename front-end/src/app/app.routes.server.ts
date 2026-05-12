import { RenderMode, ServerRoute } from '@angular/ssr';
import { Router } from '@angular/router';
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },

];
