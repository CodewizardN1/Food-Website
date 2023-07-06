import { cooker } from "@/assets"
import { Box, Button, Text } from "@chakra-ui/react"
import Image from "next/image"


const Cooker = () => {
  return (
    <Box w={{base: '80%', md: '85%'}} className="center" pt={{base: '120px', md: '200px'}}>
      <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} alignItems={'center'} justifyContent={'space-around'}>

      <Box w={{base: '90%', md: '500px'}} display={'flex'} flexDirection={'column'} gap={{base: '2rem', md: '3.6rem'}}> 
            <Text fontSize={{base :'40px', md: '54px'}} fontWeight={{base: '450', md: '750'}} color={'#151414'} lineHeight={'normal'}>Fresh Vegetables Every Day</Text>
            <Text fontSize={{base: '18px', md: '22px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'34px'}>Healthy life as informed declared we enjoy the margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe.</Text>
            <Button borderRadius={'50px'} fontSize={{base :'18px', md: '20px'}} bg={'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #64BB47 0%, #2C9553 100%)'} w={{base :'170px', md: '210px'}} h={{base: '50px', md: '64px'}} color={'#fff'}  >Learn More</Button>
        </Box>


        <Box pt={{base: '60px', md: '0'}}>
            <Box ><Image src={cooker} alt="img not found"></Image></Box>
        </Box>

        
      </Box>
    </Box>
  )
}

export default Cooker
