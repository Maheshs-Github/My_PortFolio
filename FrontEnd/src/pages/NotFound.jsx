import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-panel border border-term-border rounded-lg overflow-hidden font-mono max-w-lg w-full">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-term-border bg-primary/60">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-red/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-secondary/70"></span>
          <span className="text-term-muted text-xs ml-2">error.log</span>
        </div>
        <div className="p-8 flex flex-col gap-3">
          <p className="text-primary-red text-sm">$ curl this-page</p>
          <p className="text-white text-xl">404: Route not found</p>
          <p className="text-white/70 text-sm">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-3 w-fit text-tertiory border border-tertiory rounded-md px-4 py-2 hover:bg-tertiory hover:text-primary transition-colors text-sm"
          >
            cd ~/home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
