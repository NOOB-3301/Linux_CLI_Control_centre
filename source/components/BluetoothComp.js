import React, { useState } from 'react';
import { Box, Text, useInput } from 'ink';
import { ProgressBar, Select } from '@inkjs/ui';
import Gradient from 'ink-gradient';
import { UnorderedList } from '@inkjs/ui';
import App from '../app.js';
import * as childprocess from "child_process";

const BluetoothComp = () => {
    const [localValue, setLocalValue] = useState(''); // Local state isolated to BluetoothComp
    const [progressbar, setProgressbar] = useState(0)
    
    useInput((input) => {
        if (input === 's') {
            childprocess.execSync('sudo systemctl start bluetooth.service')
        }
        if (input === 't') {
            childprocess.execSync('sudo systemctl stop bluetooth.service')
        }
        if (input === 'b') {
            const process =childprocess.execSync('blueman-manager')
            console.log(process)
        }
        if (input === 'd') {
            let progress =0
            let interval = 1000
            let timeout = 10000
            const child = childprocess.spawn('bluetoothctl' ,['--timeout','10' ,'scan', 'on' ])
            let progresscounter =setInterval(()=>{
                progress = progress+ interval
                let percentage = Math.floor((progress/timeout)*100) 
                setProgressbar(prev => percentage)
                console.log(progress)
                if (percentage > 100) {
                    clearInterval(progresscounter)
                }
            }, interval)
            child.stdout.on('data', function(data){
                console.log("device is",data.toString().split("Device"))
            })

            //a process for a timeout for increasing a counter concurrently for a progress bar
        }

        if (input === 'l') {
            const child = childprocess.spawn('bluetoothctl', ['devices'])
            child.stdout.on('data', function(data){
                console.log("device is",data.toString())
            })
        }

    });



    return (
        <Box flexDirection="column">
            <Box justifyContent="center">
                <Gradient name="morning">
                    <Text>Bluetooth Manager</Text>
                </Gradient>
            </Box>

            <Box flexDirection='column'>
                <Text>Available Options: </Text>

                <UnorderedList>
                    <UnorderedList.Item>
                        <Text>Start Bluetooth (press s)</Text>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                        <Text>Stop Bluetooth (press t)  </Text>
                    </UnorderedList.Item>
                    <UnorderedList.Item>
                        <Text>Search For Devices (press d)</Text>
                        <Text>Progress is {progressbar}</Text>
                        <Text>Progress is </Text><ProgressBar value={progressbar}/>   
                    </UnorderedList.Item>

                    <UnorderedList.Item>
                        <Text>List the bluetooth devices (press l)</Text> 
                    </UnorderedList.Item>  

                    <UnorderedList.Item>
                        <Text>Open Blueman (press b)</Text>
                    </UnorderedList.Item>
                </UnorderedList>

            </Box>


        </Box>
    );
};

export default BluetoothComp;
