import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Review } from '../types';
import { Star, Quote, Award, MessageSquarePlus, CheckCircle2, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS_DATA);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    rating: 5,
    source: 'Resy' as const,
    comment: '',
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Review = {
      id: Date.now().toString(),
      author: newReview.author,
      rating: newReview.rating,
      source: newReview.source,
      comment: newReview.comment,
      date: 'Just Now',
    };
    setReviews([created, ...reviews]);
    setSubmitted(true);
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-950 text-amber-50 relative scroll-mt-20 border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-sans text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30">
            Acclaim & Accolades
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 mt-3 mb-4">
            Press & Diner Reviews
          </h2>
          <p className="text-amber-200/70 text-sm sm:text-base">
            What critics, food lovers, and Park Slope neighbors have to say about Bricolage.
          </p>
        </div>

        {/* Featured Press Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.filter((r) => r.featured).map((press) => (
            <div
              key={press.id}
              className="bg-gradient-to-b from-amber-950/40 via-zinc-900 to-zinc-950 p-6 rounded-3xl border border-amber-500/30 relative shadow-2xl flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-amber-500/40 mb-4" />
              
              <p className="text-sm text-amber-100/90 font-serif italic leading-relaxed mb-6">
                "{press.comment}"
              </p>

              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-amber-300">{press.author}</h4>
                  <span className="text-[11px] text-amber-200/60 font-sans">{press.role}</span>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Feed Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-zinc-900 p-6 rounded-2xl border border-amber-500/20">
          <div>
            <h3 className="text-xl font-serif font-bold text-amber-100">Diner Feedback</h3>
            <p className="text-xs text-amber-200/60">Over 2,500+ 5-Star reviews across Resy, Google, and Yelp</p>
          </div>

          <button
            onClick={() => {
              setShowReviewForm(!showReviewForm);
              setSubmitted(false);
            }}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-2 shadow-lg"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Leave A Review</span>
          </button>
        </div>

        {/* Optional Review Submission Drawer */}
        {showReviewForm && (
          <div className="bg-zinc-900 border border-amber-500/30 p-6 rounded-3xl mb-12 animate-in fade-in max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-serif font-bold text-lg text-amber-100">Review Published!</h4>
                <p className="text-xs text-amber-200/70">Thank you for sharing your experience at Bricolage.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <h4 className="font-serif font-bold text-amber-200 text-base">Share Your Dining Experience</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    className="p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  />

                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    className="p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                  >
                    <option value={5}>★★★★★ (5 Stars - Outstanding)</option>
                    <option value={4}>★★★★☆ (4 Stars - Great)</option>
                    <option value={3}>★★★☆☆ (3 Stars - Average)</option>
                  </select>
                </div>

                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what you enjoyed (favorite dish, cocktails, garden patio service)..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-3 rounded-xl bg-zinc-950 border border-amber-500/30 text-amber-100 text-xs focus:outline-none focus:border-amber-400"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-xl"
                >
                  Post Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* Customer Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.filter((r) => !r.featured).map((rev) => (
            <div
              key={rev.id}
              className="bg-zinc-900/80 p-5 rounded-2xl border border-amber-500/15 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-amber-200">{rev.author}</span>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    {rev.source}
                  </span>
                </div>

                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-amber-100/80 leading-relaxed font-sans">
                  "{rev.comment}"
                </p>
              </div>

              <span className="text-[10px] text-amber-200/40 mt-4 block">{rev.date}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
