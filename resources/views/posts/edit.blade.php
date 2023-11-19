<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Edit</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <form action="{{url("post/$post->id")}}" method="POST">
    @method('DELETE')
    @csrf
  <button type="submit" class="btn btn-danger">Hapus</button>
  </form>
    <h1>Create</h1>
    <form action="{{url("post/$post->id")}}" method="POST" class="form-control">
      @method('PATCH')
      @csrf
    <label for="title">Title</label>
    <input type="text" class="form-control" name="title" value="{{$post->title}}">
    <label for="content">Content</label>
    <textarea class="form-control" name="content" rows="12">{{$post->content}}</textarea>
    <button type="submit" class="btn btn-primary mt-2">Simpan</button>
  </form>
  </div>
</body>
</html>