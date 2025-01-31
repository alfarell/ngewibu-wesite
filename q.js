`query: 
    "query(
        $season:MediaSeason,
        $seasonYear:Int 
        $nextSeason:MediaSeason,
        $nextYear:Int){
            trending:Page(page:1,perPage:6){
                media(sort:TRENDING_DESC,type:ANIME,isAdult:false){
                    ...media
                }
            }
            season:Page(page:1,perPage:6){
                media(season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){
                    ...media
                }
            }
            nextSeason:Page(page:1,perPage:6){
                media(season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC,type:ANIME,isAdult:false){
                    ...media
                }
            }
            popular:Page(page:1,perPage:6){
                media(sort:POPULARITY_DESC,type:ANIME,isAdult:false){
                    ...media
                }
            }
            top:Page(page:1,perPage:10){
                media(sort:SCORE_DESC,type:ANIME,isAdult:false){
                    ...media
                }
            }
        }
        fragment media on Media{
            id 
            title{
                userPreferred
            }
            coverImage{
                extraLarge 
                large 
                color
            }
            startDate{
                year 
                month 
                day
            }
            endDate{
                year 
                month 
                day
            }
            bannerImage 
            season 
            description 
            type 
            format 
            status 
            episodes 
            duration 
            chapters 
            volumes 
            genres 
            isAdult 
            averageScore 
            popularity 
            mediaListEntry{
                id 
                status
            }
            nextAiringEpisode{
                airingAt 
                timeUntilAiring 
                episode
            }
            studios(isMain:true){
                edges{
                    isMain 
                    node{
                        id 
                        name
                    }
                }
            }
        }"


            variables: {type: "ANIME", season: "SPRING", seasonYear: 2020, nextSeason: "SUMMER", nextYear: 2020}
            nextSeason: "SUMMER"
            nextYear: 2020
            season: "SPRING"
            seasonYear: 2020
            type: "ANIME"
`

{
  query: `query(
        $page:Int = 1 
        $id:Int 
        $type:MediaType 
        $isAdult:Boolean = false 
        $search:String 
        $format:[MediaFormat]
        $status:MediaStatus 
        $countryOfOrigin:CountryCode 
        $source:MediaSource 
        $season:MediaSeason 
        $year:String 
        $onList:Boolean 
        $yearLesser:FuzzyDateInt 
        $yearGreater:FuzzyDateInt 
        $episodeLesser:Int 
        $episodeGreater:Int 
        $durationLesser:Int 
        $durationGreater:Int 
        $chapterLesser:Int 
        $chapterGreater:Int 
        $volumeLesser:Int 
        $volumeGreater:Int 
        $licensedBy:[String]
        $genres:[String]
        $excludedGenres:[String]
        $tags:[String]
        $excludedTags:[String]
        $minimumTagRank:Int 
        $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]) {
            Page(page:$page,perPage:20){
                pageInfo{
                    total 
                    perPage 
                    currentPage 
                    lastPage 
                    hasNextPage
                }
                media(
                  id:$id 
                  type:$type 
                  season:$season 
                  format_in:$format 
                  status:$status 
                  countryOfOrigin:$countryOfOrigin 
                  source:$source 
                  search:$search 
                  onList:$onList 
                  startDate_like:$year 
                  startDate_lesser:$yearLesser 
                  startDate_greater:$yearGreater 
                  episodes_lesser:$episodeLesser 
                  episodes_greater:$episodeGreater 
                  duration_lesser:$durationLesser 
                  duration_greater:$durationGreater 
                  chapters_lesser:$chapterLesser 
                  chapters_greater:$chapterGreater 
                  volumes_lesser:$volumeLesser 
                  volumes_greater:$volumeGreater 
                  licensedBy_in:$licensedBy 
                  genre_in:$genres 
                  genre_not_in:$excludedGenres 
                  tag_in:$tags 
                  tag_not_in:$excludedTags 
                  minimumTagRank:$minimumTagRank 
                  sort:$sort 
                  isAdult:$isAdult){
                    id 
                    title{
                        userPreferred
                    }
                    coverImage{
                        extraLarge 
                        large 
                        color
                    }
                    startDate{
                        year 
                        month 
                        day
                    }
                    endDate{
                        year 
                        month 
                        day
                    }
                    bannerImage 
                    season 
                    description 
                    type 
                    format 
                    status 
                    episodes 
                    duration 
                    chapters 
                    volumes 
                    genres 
                    isAdult 
                    averageScore 
                    popularity 
                    nextAiringEpisode{
                        airingAt 
                        timeUntilAiring 
                        episode
                    }
                    mediaListEntry{
                        id status
                    }
                    studios(isMain:true){
                      edges{
                        isMain 
                        node{
                          id 
                          name
                        }
                      }
                    }
                  }
                }
            }`;
  variables: {
    page: 1;
    type: "ANIME";
    sort: "SCORE_DESC"
  }
}


query: `query{
    Viewer{
        id 
        name 
        about 
        avatar{
            large
        }
        bannerImage 
        unreadNotificationCount 
        donatorTier 
        donatorBadge 
        moderatorStatus 
        options{
            titleLanguage 
            airingNotifications 
            displayAdultContent 
            profileColor 
            notificationOptions{
                type 
                enabled
            }
        }
        mediaListOptions{
            scoreFormat 
            rowOrder 
            animeList{
                customLists 
                sectionOrder 
                splitCompletedSectionByFormat 
                advancedScoring 
                advancedScoringEnabled
            }
            mangaList{
                customLists 
                sectionOrder 
                splitCompletedSectionByFormat 
                advancedScoring 
                advancedScoringEnabled
            }
        }
    }
}`

query: `query media($id:Int,$type:MediaType,$isAdult:Boolean){
    Media(id:$id,type:$type,isAdult:$isAdult){
        id 
        title{
            userPreferred 
            romaji 
            english 
            native
        }
        coverImage{
            extraLarge 
            large
        }
        bannerImage 
        startDate{
            year 
            month 
            day
        }
        endDate{
            year 
            month 
            day
        }
        description 
        season 
        seasonYear 
        type 
        format 
        status 
        episodes 
        duration 
        chapters 
        volumes 
        genres 
        synonyms 
        source(version:2)
        isAdult 
        isLocked 
        meanScore 
        averageScore 
        popularity 
        favourites 
        hashtag 
        countryOfOrigin 
        isLicensed 
        isFavourite 
        isRecommendationBlocked 
        nextAiringEpisode{
            airingAt 
            timeUntilAiring 
            episode
        }
        relations{
            edges{
                id 
                relationType(version:2)
                node{
                    id 
                    title{
                        userPreferred
                    }
                    format 
                    type 
                    status 
                    bannerImage 
                    coverImage{
                        large
                    }
                }
            }
        }
        characterPreview:characters(perPage:6,sort:[ROLE,ID]){
            edges{
                id 
                role 
                voiceActors(language:JAPANESE){
                    id 
                    name{
                        full
                    }
                    language 
                    image{
                        large
                    }
                }
                node{
                    id 
                    name{
                        full
                    }
                    image{
                        large
                    }
                }
            }
        }
        staffPreview:staff(perPage:8){
            edges{
                id 
                role 
                node{
                    id 
                    name{
                        full
                    }
                    language 
                    image{
                        large
                    }
                }
            }
        }
        studios{
            edges{
                isMain 
                node{
                    id 
                    name
                }
            }
        }
        reviewPreview:reviews(perPage:2,sort:[RATING_DESC,ID]){
            pageInfo{
                total
            }
            nodes{
                id 
                summary 
                rating 
                ratingAmount 
                user{
                    id 
                    name 
                    avatar{
                        large
                    }
                }
            }
        }
        recommendations(perPage:7,sort:[RATING_DESC,ID]){
            pageInfo{
                total
            }
            nodes{
                id 
                rating 
                userRating 
                mediaRecommendation{
                    id 
                    title{
                        userPreferred
                    }
                    format 
                    type 
                    status 
                    bannerImage 
                    coverImage{
                        large
                    }
                }
                user{
                    id 
                    name 
                    avatar{
                        large
                    }
                }
            }
        }
        externalLinks{
            site 
            url
        }
        streamingEpisodes{
            site 
            title 
            thumbnail 
            url
        }
        trailer{
            id 
            site
        }
        rankings{
            id 
            rank 
            type 
            format 
            year 
            season 
            allTime 
            context
        }
        tags{
            id 
            name 
            description 
            rank 
            isMediaSpoiler 
            isGeneralSpoiler
        }
        mediaListEntry{
            id 
            status 
            score
        }
        stats{
            statusDistribution{
                status 
                amount
            }
            scoreDistribution{
                score 
                amount
            }
        }
    }
}`
