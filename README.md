# Expo CLI Error: Inconsistent SDK Version Between Expo Go and Project

This repository demonstrates a common, yet often cryptic, error encountered when using the Expo CLI. The error arises from a version mismatch between the Expo Go app installed on your device and the SDK version defined in your project's configuration files (`app.json` or `expo.json`).

This mismatch can manifest in various subtle ways, making it difficult to diagnose.  The provided example showcases a situation where the project uses a newer SDK version than what the installed Expo Go app supports.

## How to Reproduce

1. Clone this repository.
2. Open the project in a terminal.
3. Run `expo start`.
4. Attempt to run the app on an Expo Go client with an older version.

You might observe cryptic errors, app crashes, or unexpected behavior.  The exact error may vary depending on the degree of incompatibility.

## Solution

The solution lies in ensuring compatibility between your Expo Go app and project SDK version.  You can:

* **Update Expo Go:** The simplest solution is to update Expo Go to the latest version via the app stores (if you're using an outdated Expo Go app).
* **Downgrade SDK version:** If updating Expo Go isn't feasible, adjust your `app.json` or `expo.json` file to use an SDK version that's compatible with your Expo Go app. 
* **Check for warnings and errors:** Pay attention to all warnings and errors reported during the `expo start` process. Sometimes these messages may offer more information on the underlying cause.