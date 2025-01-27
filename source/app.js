import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { Select } from '@inkjs/ui';
import Gradient from 'ink-gradient';
import SysinfoComp from './components/SysinfoComp.js';
import BluetoothComp from './components/BluetoothComp.js';
import MainComp from './components/MainComp.js';

export default function App() {
	const [value, setValue] = useState('');

	useInput((input) => {
		if (input === 'q') process.exit();
	});

	const renderSelectedOption = () => {
		switch (value) {
			case 'sysinfo':
				return <SysinfoComp />;
			case 'blutooth':
				return <BluetoothComp />;
			case 'wifi':
				return <Text>WLAN Manager: [Managing Wi-Fi connections...]</Text>;
			case 'file':
				return <Text>Disk Manager: [Managing disk and storage...]</Text>;
			case 'network':
				return <Text>Internet: [Checking internet connections...]</Text>;
			case 'powermanager':
				return <Text>Power Menu: [Displaying power options...]</Text>;
			default:
				return (
					<MainComp/>
				);
		}
	};

	return (
		// <Box flexDirection="column" >
		// 	<Box justifyContent="center" marginBottom={1}>
		// 		<Gradient name="rainbow">
		// 			<Text>Control Center</Text>
		// 		</Gradient>
		// 	</Box>

		// 	<Select
		// 		options={[
		// 			{ label: 'System Info', value: 'sysinfo' },
		// 			{ label: 'Bluetooth Network', value: 'blutooth' },
		// 			{ label: 'WLAN Manager', value: 'wifi' },
		// 			{ label: 'Disk Manager', value: 'file' },
		// 			{ label: 'Internet', value: 'network' },
		// 			{ label: 'Power Menu', value: 'powermanager' },
		// 		]}
		// 		onChange={setValue}
		// 	/>

			<Box marginTop={2}>
				{renderSelectedOption()}
			</Box>
		// </Box>
	);
}
