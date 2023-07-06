import { flat, loc, task } from "@/assets"
import {Box, Text} from "@chakra-ui/react"
import Image from "next/image"

const Progres = () => {
  return (
    <Box w={{base: '80%', md: '90%'}} mt={{base: '300px', md: '100px'}} className="center" h={'100%'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={{base: '8px', md: '1rem'}}>
            <Text textAlign={'center'} color={'#151414'} fontSize={{base: '40px', md: '54px'}} fontWeight={{base: '450', md: '770'}}>Why Choose US?</Text>
            <Text textAlign={'center'} color={'#3B433E'} fontSize={{base: '17px', md: '24px'}} fontWeight={{base: '450', md: '770'}}>Organic food is grown without the use of synthetic chemicals</Text>
        </Box>
      <Box pt={{base: '50px', md: '90px'}}>

        <Box gap={{base :'2rem', md: '0'}} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} flexDirection={{base: 'column', md: 'row'}}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'1em'}>
                <Image src={task} alt="img not found" />
                <Text color={'#181D19'} fontSize={{base: '22px', md: '28px'}} fontWeight={{base: '450', md: '770'}}>Easy to order</Text>
                <Text textAlign={'center'} w={{base: '200px', md: '270px'}} fontSize={{base: '14px', md: '18px'}} fontWeight={{base: '450', md: '770'}}>foods include fresh produce, meats as well as processed</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'1em'}>
                <Image src={loc} alt="img not found" />
                <Text color={'#181D19'} fontSize={{base: '22px', md: '28px'}} fontWeight={{base: '450', md: '770'}}>Easy to order</Text>
                <Text textAlign={'center'} w={{base: '200px', md: '270px'}} fontSize={{base: '14px', md: '18px'}} fontWeight={{base: '450', md: '770'}}>foods include fresh produce, meats as well as processed</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'1em'}>
                <Image src={flat} alt="img not found" />
                <Text color={'#181D19'} fontSize={{base: '22px', md: '28px'}} fontWeight={{base: '450', md: '770'}}>Easy to order</Text>
                <Text textAlign={'center'} w={{base: '200px', md: '270px'}} fontSize={{base: '14px', md: '18px'}} fontWeight={{base: '450', md: '770'}}>foods include fresh produce, meats as well as processed</Text>
            </Box>
        </Box>

        <Box pt={{base :'30px', md: '50px'}} display={'flex'} alignItems={'center'} justifyContent={'center'}  gap={{base: '18px', md: '15em'}} >
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={'5px'}>
                <Text fontSize={{base: '30px', md: '44px'}} fontWeight={{base: '400', md: '700'}}>40+</Text>
                <Text textAlign={'center'} color={'#545454'} fontSize={{base: '17px', md: '20px'}} fontWeight={{base: '450', md: '760'}}>Food Partners</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={'5px'}>
                <Text fontSize={{base: '30px', md: '44px'}} fontWeight={{base: '400', md: '700'}}>459+</Text>
                <Text textAlign={'center'} color={'#545454'} fontSize={{base: '17px', md: '20px'}} fontWeight={{base: '450', md: '760'}}>Trusted Clients</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={'5px'}>
                <Text fontSize={{base: '30px', md: '44px'}} fontWeight={{base: '400', md: '700'}}>12k+</Text>
                <Text textAlign={'center'} color={'#545454'} fontSize={{base: '17px', md: '20px'}} fontWeight={{base: '450', md: '760'}}>Order Online</Text>
            </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Progres
