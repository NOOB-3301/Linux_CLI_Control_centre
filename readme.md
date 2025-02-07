# Linux CLI Control Center

A terminal-based control center for Linux, built with [React Ink](https://github.com/vadimdemedes/ink). This CLI application provides a user-friendly interface for managing system settings such as system information, Bluetooth, Wi-Fi, disk management, and power options.

## Features
- **System Info:** View detailed system information.
- **Bluetooth Manager:** Manage Bluetooth connections.(Uses blueman-manager)
- **Wi-Fi Manager:** Handle Wi-Fi connections.
- **Disk Manager:** Manage storage and disk usage.
- **Network Manager:** Check internet connectivity.
- **Power Menu:** Display power options.
- **Keyboard Navigation:** Navigate using keyboard inputs.
- **Graceful Exit:** Press `q` to quit the application.

## Installation
Ensure you have Node.js installed, then clone this repository and install dependencies:

```sh
git clone https://github.com/yourusername/linux-cli-controlcentre.git
cd linux-cli-controlcentre
npm install
```

## Usage
Run the application with:

```sh
npm run build
chmod +X dist/*
npm link
``` 
(OR)
``` sh
npm run build
chmod +X dist/*
sudo npm link
```

## Controls
- Use arrow keys to navigate.
- Press `Enter` to select an option.
- Press `q` to exit the application.

## Dependencies
- [Ink](https://github.com/vadimdemedes/ink) - React for CLI
- [@inkjs/ui](https://github.com/vadimdemedes/ink) - UI components for Ink
- [ink-gradient](https://github.com/sindresorhus/ink-gradient) - Gradient text support

## Contributing
Feel free to fork and submit pull requests. Any contributions are welcome!

## License
This project is licensed under the MIT License.


