import { Box, Button, Text, Input, useToast } from '@chakra-ui/react'
import { useState } from 'react'


const Contact = () => {
    const toast = useToast()
    const [email, setEmail] = useState('')
    const handleClick = () =>{
        if(email === ""){
            toast({
                title: 'Email',
                description: "Emailingizni toldiring",
                status: 'info',
                duration: 9000,
                isClosable: true,
              })
        }
        else if(email === '@gmail.com'){
          toast({
            title: 'Email',
            description: "Siz muvafaqiyatli tasdiqlandi",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }else{
          toast({
            title: 'Email',
            description: "Emailingizni tog'ri kiriting",
            status: 'info',
            duration: 9000,
            isClosable: true,
          })
        }

    }
  return (
    <Box pt={{base: '50px', md: '0'}} w={{base: '80%', md: '100%'}} className='center'>
      <Box  display={'flex'} flexDirection={'column'} gap={'4rem'} h={'450px'}>
        <Box mt={{base: '40px', md: '120px'}} display={'flex'} flexDirection={'column'} gap={'0.7rem'}>
        <Text textAlign={'center'} fontSize={{base: '32px', md: '36px'}} color={'#3B433E'} fontWeight={{base: '450', md: '750'}} lineHeight={'34px'}>Subscribe to the Newsletter</Text>
        <Text textAlign={'center'} fontSize={{base: '20px', md: '24px'}} color={'#3B433E'} fontWeight={{base: '300', md: '400'}} lineHeight={'34px'}>Enter your email below to get our daily offers and news</Text>
        </Box>
        <Box flexDirection={{base :'column', md: 'row'}} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={{base: '1rem',md: '2rem'}}>
            <Input onChange={(e) => setEmail(e.target.value)} borderRadius={'165px'} w={{base: '280px', md: '330px'}} h={{base: '50px', md: '60px'}} fontSize={{base: '16px', md: '#8A8A8A'}} color={'#8A8A8A'} placeholder='Enter your email.'></Input>
            <Button  borderRadius={'50px'} fontSize={{base :'18px', md: '20px'}} bg={'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #64BB47 0%, #2C9553 100%)'} w={{base :'170px', md: '210px'}} h={{base: '50px', md: '64px'}} color={'#fff'} onClick={handleClick}>Get Started</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Contact






