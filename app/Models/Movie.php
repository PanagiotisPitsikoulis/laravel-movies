<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'image_link',
        'category',
        'label',
    ];

    /**
     * Search for movies by a partial match on the title.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $title
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearchByTitle($query, $title)
    {
        return $query->where('title', 'LIKE', '%' . $title . '%');
    }
}
