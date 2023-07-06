
import { leave1, leave2, leave3, main } from '@/assets'
import {Box, Text, Button,   } from '@chakra-ui/react'
import Image from 'next/image'

const Main = () => {
  return (
    <Box w={{base: '80%', md: '85%'}} h={'88vh'} className='center' >
      <Box display={'flex'} alignItems={'center'}  justifyContent={'space-around'} pt={{base: '20px', md: '100px'}} flexDirection={{base: 'column', md: 'row'}}>
        <Box w={{base: '90%', md: '596px'}} display={'flex'} flexDirection={'column'} gap={'2.2rem'}>
            <Text  fontSize={{base: '40px', md: '76px'}} fontWeight={{base: '400',md: '800'}} lineHeight={'normal'}>Just <span style={{color: "#5FB848"}}> Eat healthy</span> food to live a healthier life</Text>
            <Text color={'#181D19'} fontSize={{base: '20px', md: '24px'}} fontWeight={{base: '500', md: '750'}}>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</Text>
            <Button  borderRadius={'50px'} style={{background: "var(--green-gradient, linear-gradient(180deg, #64BB47 0%, #2C9553 100%))"}} fontSize={{base: '20px', md: '24px'}}  fontWeight={'500'} color={'#fff'} w={{base: '140px', md: '180px'}} h={{base: '45px',md: '55px'}}>Order Now</Button>
        </Box>


        <Box w={{base: '100%', md: '50%'}} pt={{base :'180px', md: '0'}}>

        <Box borderRadius={{base: '10%', md: '0'}} w={{base: '100%', md: '750px'}} bgPosition={'center'} h={{base: '50vh', md: '79vh'}} mt={'-120px'} mr={'110px'} className='bg' zIndex={100}>
          <Box display={{base: 'none', md: 'flex'}}>
            <Text position={'absolute'} top={'200px'} right={'40%'}>
            <Image src={leave3} alt='img not found' />
            </Text>
            <Text position={'absolute'} top={'150px'} right={'200px'}>
            <Image src={leave1} alt='img not found' />
            </Text>
            <Text position={'absolute'} right={'36%'}  top={'11%'} zIndex={9}>
            <Image src={leave2} alt='img not found' />
            </Text>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Main
