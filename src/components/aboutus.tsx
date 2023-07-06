import { veg1, veg2, veg3 } from '@/assets'
import { Box, Button, Text, styled, transform } from '@chakra-ui/react'
import Image from 'next/image'
const Aboutus = () => {
  return (
    <Box w={{base: '80%', md: '85%'}} className='center' pt={{base: '11px', md: '150px'}}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} flexDirection={{base: 'column', md: 'row'}}>
        <Box w={{base: '90%', md: '500px'}} display={'flex'} flexDirection={'column'} gap={{base: '2em', md: '4rem'}} justifyContent={{base: 'center', md: 'left'}} alignItems={{base :'center', md: 'flex-start'}}>
            <Text color={'#151414'} fontSize={{base: '40px', md: '54px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>About US</Text>
            <Text textAlign={{base: 'center', md :'left'}} fontSize={{base: '18px', md: '22px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'34px'}>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</Text>
            <Button borderRadius={'50px'} fontSize={{base :'18px', md: '20px'}} bg={'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #64BB47 0%, #2C9553 100%)'} w={{base :'170px', md: '210px'}} h={{base: '50px', md: '64px'}} color={'#fff'}  >Learn More</Button>
        </Box>

        <Box display={'flex'} gap={'1rem'} pt={{base :'30px', md: '0'}}>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Box className='hover1'><Image src={veg1} alt='img not found'></Image></Box>
                <Box className='hover2'><Image src={veg2} alt='img not found'></Image></Box>
            </Box>
            <Box pt={{base: '30px', md: '60px'}}>
                <Box className='hover3'><Image src={veg3} alt='img not found'></Image></Box>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Aboutus
