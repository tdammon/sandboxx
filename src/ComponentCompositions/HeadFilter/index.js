import React from 'react';
import './headFilterStyles.css';
// eslint-disable-next-line object-curly-newline
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const HeadFilter = ({ games, getGameWithFilter }) => {
  const [platformFilter, setPlatformFilter] = React.useState('all');
  const [sortBy, setSortBy] = React.useState('release-date');
  const [categoryFilter, setCategoryFilter] = React.useState('');

  const categories = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];

  const setFilter = (filter) => {
    setPlatformFilter(filter);
    getGameWithFilter(filter, categoryFilter, sortBy);
  };

  const setSort = (sort) => {
    setSortBy(sort);
    getGameWithFilter(platformFilter, categoryFilter, sort);
  };

  const handleChange = (event) => {
    setCategoryFilter(event.target.value);
    getGameWithFilter(platformFilter, event.target.value, sortBy);
  };
  return (
    <div id="head-filter">
      <h1>{`${games.length} Games Found`}</h1>
      <div id="main-content">
        <div className="header-data-row">
          <div id="platform-filter">
            <button
              type="button"
              id={platformFilter === 'all' ? 'active' : null}
              className="filter-button"
              onClick={() => setFilter('all')}>
              All Platforms
            </button>
            <button
              type="button"
              id={platformFilter === 'pc' ? 'active' : null}
              className="filter-button"
              onClick={() => setFilter('pc')}>
              PC
            </button>
            <button
              type="button"
              id={platformFilter === 'browser' ? 'active' : null}
              className="filter-button"
              onClick={() => setFilter('browser')}>
              Browser
            </button>
          </div>
          <div id="sort-by">
            <button
              type="button"
              id={sortBy === 'release-date' ? 'active' : null}
              className="filter-button"
              onClick={() => setSort('release-date')}>
              Release Date
            </button>
            <button
              type="button"
              id={sortBy === 'alphabetical' ? 'active' : null}
              className="filter-button"
              onClick={() => setSort('alphabetical')}>
              A-Z
            </button>
            <button
              type="button"
              id={sortBy === 'popularity' ? 'active' : null}
              className="filter-button"
              onClick={() => setSort('popularity')}>
              Popularity
            </button>
            <button
              type="button"
              id={sortBy === 'relevance' ? 'active' : null}
              className="filter-button"
              onClick={() => setSort('relevance')}>
              Releveance
            </button>
          </div>
        </div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={categoryFilter}
            label="Category"
            defaultValue=""
            onChange={handleChange}>
            <MenuItem value="">all</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
