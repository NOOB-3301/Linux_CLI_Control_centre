import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { Select } from '@inkjs/ui';
import Gradient from 'ink-gradient';
import BluetoothComp from './BluetoothComp.js';
import SysinfoComp from './SysinfoComp.js';

export default function MainComp() {
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
            case 'mainmenu':
                return (
                    <Text color="cyan">
                    Select an option from the menu to continue.
                </Text>
                )
			default:
				return (
					<Text color="cyan">
						Select an option from the menu to continue.
					</Text>
				);
		}
	};

	return (
		<Box flexDirection="column" >
			<Box justifyContent="center" marginBottom={1}>
				<Gradient name="rainbow">
					<Text>Control Center</Text>
				</Gradient>
			</Box>

			<Select
				options={[
					{ label: 'System Info', value: 'sysinfo' },
					{ label: 'Bluetooth Network', value: 'blutooth' },
					{ label: 'WLAN Manager', value: 'wifi' },
					{ label: 'Disk Manager', value: 'file' },
					{ label: 'Internet', value: 'network' },
					{ label: 'Power Menu', value: 'powermanager' },
                    {label: 'Back to Main Menu', value: 'mainmenu'}
				]}
				onChange={setValue}
			/>

			<Box marginTop={2}>
				{renderSelectedOption()}
			</Box>
		</Box>
	);
}
