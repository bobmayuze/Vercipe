# Vercipe
Version control based recipe for Spring 18 ITWS 4500 course. 


## Getting Started
Before you started, make sure you have docker installed and can run the hello-world demo.

1. Clone the repo

```
$ git clone https://github.com/bobmayuze/Vercipe
```

2. Build images. You will see db not connected this time, don't worry about it.
```
$ ./scripts/init.sh
```


3. Rebuild containers
```
$ ./scripts/init.sh 
```

4. Vola, you are all set!

## Project proposals:

1. Proposal.pdf
2. Vercipe Project Timeline - Gantt Chart.pdf



Data Schema for a recipe
```
{
	_id : ObjectId,
	Recipe_Title: String,
	Creator: String,
	Creator_Email: String,
	Material_List: [String],
	Instructions: String,
	Create_Time: Unix Timestamp,
	Version: Int,
	Previous_version: Int
}

```
