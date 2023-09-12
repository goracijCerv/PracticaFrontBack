namespace BookApi.Entitys
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; } = string.Empty;
        public string author { get; set; } = string.Empty;
        public DateTime datePublication { get; set; } = DateTime.Today;
        public int sales { get; set; }
    }
}
