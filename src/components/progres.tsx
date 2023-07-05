import {Box, Text} from "@chakra-ui/react"

const Progres = () => {
  return (
    <Box w={{base: '80%', md: '90%'}} mt={{base: '50px', md: '100px'}} className="center">
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <Text textAlign={'center'} color={'#151414'} fontSize={{base: '40px', md: '54px'}} fontWeight={{base: '450', md: '770'}}>Why Choose US?</Text>
            <Text textAlign={'center'} color={'#3B433E'} fontSize={{base: '17px', md: '24px'}} fontWeight={{base: '450', md: '770'}}>Organic food is grown without the use of synthetic chemicals</Text>
        </Box>
      <Box>
        <Box>
            
        </Box>
      </Box>
    </Box>
  )
}

export default Progres
