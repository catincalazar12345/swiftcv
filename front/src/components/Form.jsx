import { Button, Checkbox, Group, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

const isValid = (value)=> {
        let linkArr=value.split(",");
        if(linkArr[0]===' '|| linkArr[0]==='-') return true;
        const linkValid = [];
        let j=0;
        for (let i=0; i<linkArr.length; i++){
        
                if(linkArr[i].startsWith("www.")){
                linkValid[j++]=linkArr[i];
            }
            
        }
        if (linkArr.length==linkValid.length) return true;
        else return false;

}

export default function Form() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone:'',
      links: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      firstname: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      lastname: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      phone: (value) => (/[^0-9]/.test(value) || value.length != 10 ? 'Invalid phone number' : null),
      links: (value)=> (isValid(value) ? null : 'Invalid links')
    }
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="First Name"
        placeholder="ex: Catinca"
        key={form.key('firstname')}
        {...form.getInputProps('firstname')}
      />

      <TextInput
        withAsterisk
        label="Last Name"
        placeholder="ex: Lazar"
        key={form.key('lastname')}
        {...form.getInputProps('lastname')}
      />

      <TextInput
        withAsterisk
        label="Email"
        placeholder="yourname@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <TextInput
        withAsterisk
        label="Phone Number (RO)"
        placeholder="07xxxxxxxx"
        key={form.key('phone')}
        {...form.getInputProps('phone')}
      />

      <Textarea 
      withAsterisk
      label="Social media links (LinkedIn, GitHub, etc)"
      description="Note: Links must be comma-separated"
      placeholder="ex: www.linkedin.com/in/catinca-lazar-319266337,www.github.com/catincalazar12345"
       key={form.key('links')}
        {...form.getInputProps('links')}
    />
      
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

