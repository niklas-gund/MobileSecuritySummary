import "./AndroidOverview.css";

export default function AndroidOverview() {
  return (
    <div className="p-2">
      <h3 className="text-center">Android Platform</h3>
      {/* System Apps */}
      <div className="bg-cyan-500 rounded">
        <div className="component-title">System Apps</div>
        <div className="grid grid-cols-3 gap-2 p-2 md:grid-cols-5">
          {["Dialer", "Email", "Calendar", "Camera", "..."].map((c) => (
            <div key={c} className="component">
              {c}
            </div>
          ))}
        </div>
      </div>
      {/* Java API Framework */}
      <div className="bg-lime-500 rounded mt-2">
        <div className="component-title">Java API Framework</div>
        <div className="grid grid-cols-3 gap-2 p-2">
          <div className="flex flex-col gap-2">
            <div className="component">Content Providers</div>
            <div className="component">View System</div>
          </div>
          <div className="col-span-2 bg-black bg-opacity-10 py-2 rounded shadow">
            <div className="text-center">Managers</div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 p-2">
              {[
                "Activity",
                "Location",
                "Package",
                "Notification",
                "Resource",
                "Telephony",
                "Window",
              ].map((c) => (
                <div key={c} className="component text-sm">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Native & Android Runtime  */}
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="bg-purple-500 rounded col-span-2">
          <div className="component-title">Native C/C++ Libraries</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
            {[
              "Webkit",
              "OpenMAX AL",
              "Libc",
              "Media Framework",
              "OpengGL ES",
              "...",
            ].map((c) => (
              <div key={c} className="component">
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-500 rounded col-span-1">
          <div className="component-title">Android Runtime</div>
          <div className="flex flex-col gap-2 p-2">
            {["Android Runtime (ART)", "Core Libraries"].map((c) => (
              <div className="component" key={c}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Hardware Abstraction Layer (HAL) */}
      <div className="bg-blue-500 rounded mt-2">
        <div className="component-title">Hardware Abstraction Layer (HAL)</div>
        <div className="grid grid-cols-3 gap-2 p-2 md:grid-cols-5">
          {["Audio", "BLE", "Camera", "Sensors", "..."].map((c) => (
            <div key={c} className="component">
              {c}
            </div>
          ))}
        </div>
      </div>
      {/* Linux Kernel */}
      <div className="bg-orange-500 rounded mt-2 p-2 flex flex-col gap-2">
        <div className="component-title">Linux Kernel</div>
        <div className="col-span-2 bg-black bg-opacity-10 py-2 rounded shadow">
          <div className="text-center">Managers</div>
          <div className="grid grid-cols-3 gap-2 p-2 md:grid-cols-5">
            {[
              "Audio",
              "Binder (IPC)",
              "Display",
              "Keypad",
              "Bluetooth",
              "Camera",
              "Shared Memory",
              "USB",
              "Wifi",
            ].map((c) => (
              <div key={c} className="component">
                {c}
              </div>
            ))}
          </div>
        </div>
        <div className="component">Power Management</div>
      </div>
    </div>
  );
}
