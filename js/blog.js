// Blog Section Overlay JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded - initializing blog overlay functionality");
    initBlogOverlay();
});

// Sample blog post data
// In a real implementation, this would come from a database or CMS
const blogPostData = [
    {
        id: 1,
        title: "A Day in the Life of a Property Master: Chaos, Coffee, and Creating Movie Magic",
        content: `<p>Ever wondered what it's like to be responsible for every single object an actor touches on screen? Welcome to my world as a property master—a job that's equal parts detective, artist, shopaholic, and magician.</p>
		<p>5:30 AM – The Early Bird Gets the Props. My alarm blares while the rest of the world sleeps. I'm up before the sun because in the prop world, being early isn't being on time—it's being late. First order of business: checking my phone for those delightful overnight texts from the director who suddenly decided our 1940s telephone doesn't have the right "emotional resonance." Coffee in hand, I review the day's scenes and prop lists while mentally preparing for the inevitable curveballs.</p>

        <p>7:00 AM – Set Up and Set Down. Arriving on set, I transform our prop truck into command central. My assistants and I unload, organize, and prepare everything needed for the day's shoot. The prop bible—our meticulous tracking system—ensures continuity. That coffee cup in scene 22? It better have the same amount of liquid as when we shot part of the scene three weeks ago.</p>

        <p>8:30 AM – "We Need What by When?" The AD approaches with that look I know too well. "The director wants to add a scene. We need an authentic 1920s cash register by lunch." I smile calmly while my brain races through a mental Rolodex of prop houses, collectors, and that one antique store owner who owes me a favor. Three phone calls and one promise of my firstborn later, we've secured the impossible.</p>

        <p>10:15 AM – Action! Camera rolls, and I hover just off-set, watching actors interact with my carefully selected props. The lead actress picks up a vintage fountain pen, and I hold my breath—that's a $500 collector's item, not a chew toy. Meanwhile, I'm prepping the next scene's props and answering questions via radio while simultaneously hunting down three identical backup props for an item that might get damaged in an upcoming stunt sequence.</p>

        <p>12:30 PM – Lunch Rush. While others eat, I'm either running to meet a delivery person with that emergency cash register or fixing props damaged in the morning shoot. Lunch is typically a protein bar eaten while gluing back together the antique vase an overzealous actor "improvised" with.</p>

        <p>2:00 PM – The Prop Whisperer. An actor approaches, concerned about their character's pocket watch. "Would my character really carry this style?" I switch into character psychology mode, explaining how this particular timepiece reflects their backstory. Fifteen minutes of prop therapy later, they're convinced and confident.</p>

        <p>4:45 PM – Crisis Management. We're losing light, and suddenly the script supervisor points out that we need the hero prop from Tuesday's shoot. The one that's now locked in a warehouse across town. This is why I keep a duplicate in my emergency kit. Crisis averted, no one the wiser.</p>

        <p>7:30 PM – Wrap and Reset. As filming ends, my team and I collect, clean, and inventory every single prop. Tomorrow's scenes are prepped, emergency repairs completed, and notes taken on consumption items that need replacing. The camera department is long gone while we're still working.</p>
		
		<p>9:00 PM – The After Hours Hunt. At home, I'm online shopping—not for shoes, but for a rare military medal needed next week. I'm emailing collectors in three time zones, arranging custom fabrications, and updating my props database.</p>
		
		<p>11:00 PM – The Final Check. Before sleep, I review tomorrow's call sheet one last time. As I drift off, I'm mentally cataloging the 157 props needed for the wedding scene coming up on Thursday. In this job, you're only noticed when something goes wrong. But there's a special satisfaction in knowing that the seemingly insignificant items you've carefully selected help actors become their characters and transport audiences to different worlds.</p>
		
		<p>That's the magic of being a property master—creating reality one prop at a time.</p>`
    },
    {
        id: 2,
        title: "Prop Authenticity: When Historical Accuracy Makes or Breaks Audience Belief",
        content: `<p>In the world of film and television, nothing shatters the magic faster than an anachronistic prop. As a property master, I've learned that the difference between audience immersion and distraction often hinges on a seemingly minor detail: the authentic look and feel of the objects actors handle on screen. Here's how we approach the crucial task of prop authenticity in productions where historical accuracy matters.</p>

        <p>The Research Foundation</p>
		
		<p>The journey toward authentic props begins long before cameras roll. When I receive a period script, my first stop isn't prop houses—it's research. For a recent 1940s war drama, I spent weeks immersed in historical photographs, museum archives, and vintage catalogs. Primary sources are gold; they show what people actually used, not what we think they used.</p>
		
		<p>Military and medical props demand particular precision. For these, I consult specialists—retired military personnel, medical historians, or museum curators who can verify details that even the most careful research might miss. That distinctive click of a WWII-era service pistol? It needs to sound exactly right, or veterans will notice immediately.</p>
		
		<p>Beyond Google: Unconventional Research Methods</p>
		
		<p>While digital archives have revolutionized research, some of my most valuable discoveries come from unconventional sources:</p>
		
		<p>•	Estate sales in older neighborhoods often yield period-appropriate items with provenance stories that inform our understanding</p>
		
		<p>•	Specialized collectors' forums where enthusiasts debate minute details of historical objects</p>
		
		<p>•	Oral histories from people who lived during the era, providing insights about how objects were actually used</p>
		
		<p>•	Vintage repair manuals that reveal how mechanisms functioned</p>
		
		<p>•	Period advertisements that show what was desirable and how items were marketed</p>
		
		<p>For a prohibition-era series, I spent days at a historical society reading diaries of local bootleggers. This research revealed that certain whiskey bottles were repurposed with handmade labels—a detail no production design book would mention but that added remarkable authenticity to our speakeasy scenes.</p>
		
		<p>When to Compromise (and When Never to)</p>
		
		<p>Despite our best efforts, perfect authenticity sometimes conflicts with production realities. Certain antiques are too fragile, rare, or valuable to use on set. Others might contain materials now known to be hazardous (lead paint, asbestos) or are restricted by modern regulations.</p>
        
        <p>In these cases, we must create convincing replicas—but knowing what details matter is crucial. For weapons, the weight and balance must feel authentic to actors even if the internal mechanisms are modernized. For documents, the paper stock, aging patterns, and printing techniques must withstand close-up scrutiny.</p>
		
		<p>However, certain elements never allow compromise. Visible manufacturer markings must be era-appropriate. Military insignia, medals, and rank indicators must be precisely correct—anything less disrespects those who served. Religious items must reflect the specific denominations and traditions portrayed.</p>
		
		<p>Digital Assistance vs. Tactile Knowledge</p>
		
		<p>While digital resources provide breadth, developing tactile knowledge provides depth. I maintain a reference library of material samples—papers, fabrics, metals—from different eras. Understanding how materials age naturally helps distinguish between authentic patina and artificial distressing.</p>
		
		<p>For a recent Victorian-era production, I had craftspeople handle genuine 19th-century tools before creating replicas, allowing them to understand subtle details like wear patterns on handles and the specific balance of hand-forged items. These nuances translated to screen in ways no reference photo could convey.</p>
		
		<p>The Final Test: Expert Eyes</p>
		
		<p>Before critical historical props appear on camera, I arrange for subject matter experts to review them. Their specialized knowledge often catches subtleties even thorough research might miss. This final verification step has saved productions from embarrassing anachronisms that would have undermined credibility.</p>
        
        <p>The property master's commitment to authenticity exists in the shadows—when we do our job perfectly, the audience never notices our work. They simply believe in the world we've helped create. And in an era where viewers can instantly fact-check details on their phones, that careful, invisible craftsmanship has never been more essential to storytelling.</p>
        
        <p></p>
        
        <p></p>
        
        <p></p>
        
        <p></p>
        
        <p></p>
        
        <p></p>`
    },
    {
        id: 3,
        title: "The Art of Beginning: A Property Master's Guide to Approaching New Projects",
        content: `<p>When a new script lands on my desk, it marks the beginning of a creative journey that will transform words on a page into tangible objects that help tell a story. Whether you're in the film industry or simply curious about how movie magic happens behind the scenes, understanding a property master's approach to new projects offers valuable insights into creative problem-solving that can apply to many fields. Here's my method for tackling new projects—one that has served me well through countless productions.</p>

        <p>The First Read: Emotional Before Practical</p>
        
        <p>I always begin with a complete, uninterrupted read of the script—not as a property master, but as an audience member. This first reading isn't about making lists or spotting prop challenges; it's about understanding the story's emotional core and the world it creates. What feelings should these objects evoke? What time period are we in? What's the visual language of this world?</p>
        
        <p>Only after I understand the emotional landscape do I return for a technical reading, marking every object mentioned or implied. This dual approach ensures I'm not just identifying props but understanding their narrative purpose.</p>
        
        <p>The Research Deep Dive</p>
        
        <p>Every project requires its own unique research universe. For a science fiction film, I might consult with physicists and engineers about how future technology might evolve. For a period piece, I'll immerse myself in historical archives, photographs, and museum collections.</p>
        
        <p>The magic happens when research reveals unexpected details. On a 1970s-set drama, I discovered through research that a specific brand of cigarette lighter was considered a status symbol in that era. This tiny detail, incorporated into a character's habits, spoke volumes about their aspirations—something not explicitly stated in the script but that added remarkable depth.</p>
        
        <p>Building the Relationship Triangle</p>
        
        <p>A successful project depends on three critical relationships: with the director, the production designer, and the actors. Each offers different insights into how props should function: The director provides the overall vision and emotional requirements of each object. The production designer ensures all props harmonize within the visual world being created. The actors tell me how they plan to interact with the objects—what feels natural, what helps them embody their character.</p>
        
        <p>I schedule early meetings with each, asking specific questions about their expectations and concerns. This collaborative foundation prevents costly mid-production adjustments.</p>
		
		<p>The Props Bible: More Than Just Inventory</p>
		
		<p>Every prop master keeps a detailed tracking system, but I've found success by developing what I call a "props bible" that goes beyond simple inventory. For each significant prop, I create a profile that includes:</p>
		<p>•	Its provenance and character relationship</p>
		<p>•	Reference images and research sources</p>
		<p>•	Handling requirements and special considerations</p>
		<p>•	Continuity notes</p>
		<p>•	Multiple sourcing options</p>
		<p>•	Backup plans for damage or loss</p>
		
		<p>This comprehensive approach means I'm never caught unprepared when questions arise or when unexpected script changes occur—which they inevitably will.</p>
		
		<p>Budgeting with Creative Flexibility</p>
		
		<p>Prop budgets require strategic thinking. I allocate resources based on screen time and narrative importance rather than distributing funds evenly. The hero props—those objects central to the story—receive the lion's share of the budget, while background items are sourced more economically.</p>
		
		<p>I always reserve 15% of my budget for unexpected challenges. On a recent project, a last-minute scene addition required a rare antique medical device. Having this financial cushion meant we could secure the authentic item rather than compromising with an unconvincing substitute.</p>
		
		<p>Forward Planning: The Time Traveler's Mindset</p>
		
		<p>Perhaps most importantly, I've learned to think like a time traveler—constantly moving between present tasks and future needs. While managing today's shooting requirements, I'm simultaneously preparing next week's complicated effects props and researching options for scenes months away.</p>
		
		<p>This temporal juggling is what separates exceptional prop work from merely adequate execution. It's about seeing the entire project as a continuous flow rather than isolated days of production.</p>
		
		<p>For professionals and curious outsiders alike, the property master's approach demonstrates how meticulous preparation, research, and relationship-building create the foundation for creative problem-solving in any field—where the most convincing magic often happens in the planning stages, long before the final product appears.</p>`
    }
];

// Initialize blog overlay functionality
function initBlogOverlay() {
    // Set up click event for blog post boxes
    const postBoxes = document.querySelectorAll('#blog .post-box');
    postBoxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            // Get corresponding blog post data
            // In this example, we're using the index to match with our sample data
            // In a real implementation, you might use data attributes or IDs
            const postData = blogPostData[index % blogPostData.length]; // Use modulo to cycle through available posts
            showBlogPost(postData);
        });
    });
    
    // Set up close button functionality
    const closeOverlay = document.querySelector('.close-blog-overlay');
    if (closeOverlay) {
        closeOverlay.addEventListener('click', function() {
            document.getElementById('blog-post-overlay').style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close overlay when clicking outside content area
    const blogOverlay = document.getElementById('blog-post-overlay');
    blogOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close overlay with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const blogOverlay = document.getElementById('blog-post-overlay');
            if (blogOverlay.style.display === 'block') {
                blogOverlay.style.display = 'none';
                document.body.style.overflow = ''; // Restore scrolling
            }
        }
    });
}

// Function to show a blog post in the overlay
function showBlogPost(postData) {
    console.log(`Showing blog post: ${postData.title}`);
    
    // Update overlay content
    document.getElementById('blog-overlay-title').textContent = postData.title;
    document.getElementById('blog-overlay-text').innerHTML = postData.content;
    
    // Show the overlay
    document.getElementById('blog-post-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling of background content
}