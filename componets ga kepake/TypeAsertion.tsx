function TypeAsertion() {

    const salam: unknown = 'halo nama saya budi';
    const sapa = (salam as string).length;
    console.log(sapa);
    
    

  return (
    <div>TypeAsertion</div>
  )
}

export default TypeAsertion