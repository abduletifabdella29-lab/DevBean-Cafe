import { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { products } from '../Shop/ShopData.js'
import { fetchReviews, postReview } from '../../api/ReviewApi.js'

export default function Detail() {
    
    const { id } = useParams()

    const product = products.find((p) => p.id === Number(id))

    const [reviewList, setReviewList] = useState([])
    const [name, setName] = useState('')
    const [rating, setRating] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState('')

    // Load the reviews of this product from the database
    useEffect(() => {
        let ignore = false

        async function loadReviews() {
            try {
                const data = await fetchReviews(id)
                if (!ignore) setReviewList(data)
            } catch (err) {
                if (!ignore) setError(err.message)
            }
        }

        loadReviews()

        return () => {
            ignore = true
        }
    }, [id])

    // Scroll to the top whenever the product ID changes.
    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: 'instant'
        })
    }, [id])

    // successfull message timeout
    useEffect(() => {
        if (!success) return

        const timer = setTimeout(() => {
            setSuccess('')
        }, 5000)

        return () => clearTimeout(timer)
    }, [success])

    // Redirect to the not-found page if the product does not exist
    if (!product) {
        return <Navigate to="*" replace />
    }

    // Related products: same category, excluding the current one
    const related = products.filter(
        (p) => p.category === product.category && p.id !== product.id
    )

    // Average rating
    const total = reviewList.reduce((sum, r) => sum + r.rating, 0)
    const average = reviewList.length === 0 ? 0 : total / reviewList.length

    // Submit a new review
    async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (name.trim() === '') {
    setError('Please enter your name.')
    return
    }

    if (rating === '') {
        setError('Please select a rating.')
        return
    }

    if (comment.trim() === '') {
        setError('Please write your review.')
        return
    }

    try {
        setSubmitting(true)

        const saved = await postReview({
            productId: product.id,
            name: name.trim(),
            rating: Number(rating),
            comment: comment.trim(),
        })

        setReviewList([...reviewList, saved])
        setName('')
        setRating('')
        setComment('')
        setSuccess('Review submitted successfully!')
        } catch (err) {
            setError(err.message)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <main className="px-12 py-6">
            {/* ---------- Back ---------- */}
            <Link
                to="/Shop"
                className="inline-block mb-6 px-5 py-1 rounded bg-[#FFB74D] text-black text-[13px] font-['DM_Serif_Text'] font-bold transition-all duration-300 hover:bg-[#ffa726]"
            >
                Back
            </Link>

            {/* ---------- Product ---------- */}
            <section className="bg-[#1E1B1A] rounded-md p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-72 h-48 bg-[#5a3a34] rounded overflow-hidden flex items-center justify-center text-[#C3C3C6] text-xs shrink-0">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        'image'
                    )}
                </div>

                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-white text-[32px] font-['DM_Serif_Text'] font-bold">
                        {product.name}
                    </h1>
                    <p className="text-[#D7C6B9] text-[16px] font-['DM_Serif_Text']">
                        {product.description}
                    </p>
                    <p className="text-[#FFB74D] text-[24px] font-['DM_Serif_Text'] font-bold">
                        ₹ {product.price}
                    </p>
                    <span className="px-3 py-1 rounded bg-[#3B2420] text-[#D7C6B9] text-[16px] font-['DM_Serif_Text']">
                        {product.category}
                    </span>

                    <button className="px-9 py-2 bg-[#FFB74D] text-black text-[16px] font-['DM_Serif_Text'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726]">
                        Add to Cart
                    </button>
                </div>
            </section>

            {/* ---------- Customer Reviews ---------- */}
            <section className="bg-[#1E1B1A] rounded-md p-6 mt-6">
                <h2 className="text-white text-[24px] font-['DM_Serif_Text']">
                    Customer Reviews
                </h2>
                <p className="text-[#FFB74D] text-[14px] mt-1">
                    ★ {average.toFixed(1)}{' '}
                    <span className="text-[#D7C6B9] text-[12px]">
                        ({reviewList.length})
                    </span>
                </p>

                {/* review list */}
                <div className="flex flex-col gap-3 mt-4">
                    {reviewList.map((r) => (
                        <div key={r.id} className="border-b border-white pb-3">
                            <div className="flex items-center gap-3">
                                <h3 className="text-white text-[20px] font-['DM_Serif_Text'] font-bold">
                                    {r.name}
                                </h3>
                                <span className="text-[#FFB74D] text-[12px]">
                                    {'★'.repeat(r.rating)}
                                    {'☆'.repeat(5 - r.rating)}
                                </span>
                            </div>
                            <p className="text-[#D7C6B9] text-[14px] font-['DM_Serif_Text'] mt-1">
                                {r.comment}
                            </p>
                        </div>
                    ))}
                </div>

                {/* write a review */}
                <h3 className="text-white text-[21px] font-['DM_Serif_Text'] mt-6 mb-3">
                    Write a Review
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={name}
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-[#2A2321] placeholder:text-[#D7C6B9] text-[#D7C6B9] text-[16px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none"
                    />

                    <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)} 
                        required
                        className="bg-[#2A2321] text-[#D7C6B9] text-[16px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none"
                    >
                        <option value="">Select Rating</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Okay</option>
                        <option value="2">2 - Poor</option>
                        <option value="1">1 - Bad</option>
                    </select>

                    <textarea
                        rows="3"
                        placeholder="Write your review"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        className="bg-[#2A2321] placeholder:text-[#D7C6B9] text-[#D7C6B9] text-[13px] font-['DM_Serif_Text'] rounded px-3 py-2 outline-none resize-none"
                    />
                    {success && (
                        <div className="flex items-start gap-3 mt-3 p-4 rounded-lg bg-green-950/20 border-l-4 border-green-500">
                            <span className="text-green-400 text-xl">✓</span>

                            <div>
                                <p className="text-green-400 text-sm font-semibold">
                                    {success}
                                </p>

                                <p className="text-[#D7C6B9] text-xs mt-1">
                                    Thank you for sharing your feedback.
                                </p>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="self-start px-6 py-2 bg-[#FFB74D] text-black text-[16px] font-['DM_Serif_Text'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726]"
                    >
                        Submit Review
                    </button>
                </form>
            </section>

            {/* ---------- Related products ---------- */}
            {related.length > 0 && (
                <section className="mt-8">
                    <h2 className="text-white text-[20px] font-['DM_Serif_Text'] mb-4">
                        Related Products
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {related.map((p) => (
                            <div  className="flex flex-col">
                                <div className="w-full h-32 bg-[#5a3a34] rounded overflow-hidden">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-white text-[14px] font-['DM_Serif_Text'] mt-2">
                                    {p.name}
                                </h3>
                                <p className="text-[#FFB74D] text-[12px] font-['Averia_Serif_Libre']">
                                    ₹ {p.price}
                                </p>
                                <Link keys={p.id} to={`/product/${p.id}`} 
                                className="px-2 py-1 mt-2 bg-[#FFB74D] text-black text-center text-[16px] font-['DM_Serif_Text'] font-bold rounded cursor-pointer transition-all duration-300 hover:bg-[#ffa726]">
                                View Product
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    )
}