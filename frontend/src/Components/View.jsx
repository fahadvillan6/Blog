import { Card, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
export default function View({ blog }) {
  const navigate = useNavigate();
  const val = blog.value.replace(/<[^>]+>/, '');
  return (
    <Card
      onClick={() => navigate('/blog', { state: { id: blog._id } })}
      shadow='sm'
      p='xl'
    >
      <Text weight={500} size='lg' mt='md'>
        {val.split('<')[0]}
      </Text>
    </Card>
  );
}
