import * as React from "react";

export interface IMapsLocationProps {}

export function MapsLocation(props: IMapsLocationProps) {
  return (
    <div>
      <div className="flex items-center justify-center w-full">
        <iframe
          width="85%"
          height="350"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Route%20de%20la%20Croix-Blance%2017,%201066%20Epalinges+(E-Nite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Maps Location"
          sandbox="allow-scripts allow-same-origin allow-popups" // Adjust the sandbox permissions as necessary.
        ></iframe>
      </div>
    </div>
  );
}
