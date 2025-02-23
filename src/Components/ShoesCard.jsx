
const ShoesCard = ({imagUrl, ChangeBigShoeImage, bigShoeImage}) => {
    const handleClicked = () => {
        if(bigShoeImage !== imagUrl.bigShoe) {
            ChangeBigShoeImage(imagUrl.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imagUrl.bigShoe ? 'border-red-500' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick ={handleClicked} >

<div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
    <img src={imagUrl.thumbnail} alt="shoe collection" className="object-contain" width={127} height={103} />
</div>
    </div>
  )
}

export default ShoesCard
