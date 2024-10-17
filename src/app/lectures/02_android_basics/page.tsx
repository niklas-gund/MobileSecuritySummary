import AndroidOverview from "./AndroidOverview";
import SyntaxHighlighter from "react-syntax-highlighter";

export default function AndroidBasics() {
  return (
    <div>
      <h1>Android Basics</h1>
      <AndroidOverview />
      <h2>Applications</h2>
      <ul>
        <li>Third party applications installed by the users</li>
        <li>System Applications (cannot be uninstalled)</li>
      </ul>
      <h3>Application Packages (APK)</h3>
      <ul>
        <li>APK is simply a packaging format like JAR, ZIP, TAR,... </li>
        <li>Contains:</li>
        <ul>
          <li>
            Components of applications (Activities, Services, Broadcast
            Receivers...)
          </li>
          <li>Native code (C/C++ shared libraries)</li>
          <li>Resources (images, strings,...)</li>
          <li>Manifest file (describes the components)</li>
          <li>
            META-INF (contains the application certiﬁcates and signatures)
          </li>
        </ul>
      </ul>
      <h3>Application Manifest.xml</h3>
      <ul>
        <li>Declares application meta-data and all components</li>
        <li>Example: </li>
      </ul>
      <SyntaxHighlighter wrapLongLines={true} className="code" language="xml">{`
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <application
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <receiver android:name=".MyReceiver">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
            </intent-filter>
        </receiver>
    </application>
</manifest>

`}</SyntaxHighlighter>

      <h2>Components</h2>
      <ul>
        <li>Activity Component Represents a single screen of an application</li>
        <li>Usually one main activity per app</li>
        <li>
          Have lifecycle methods (e.g. <code>onCreate, onStart, onResume</code>)
        </li>
      </ul>
    </div>
  );
}
