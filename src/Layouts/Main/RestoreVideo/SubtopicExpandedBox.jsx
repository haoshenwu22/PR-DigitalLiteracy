export default function SubtopicExpandedBox({ topicsAndSubtopics, toggleTopic, expandedTopics }) {
	return (
		<div className="flex justify-center">
			{' '}
			{/* Add this flex container */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{topicsAndSubtopics.map(([topic, subtopics]) => (
					<div key={topic} className="bg-white">
						<button
							type="button"
							className="bg-primaryColor hover:bg-primaryColorLight text-white font-bold py-2 px-4 rounded w-full mb-2"
							onClick={() => toggleTopic(topic)}
						>
							{topic}
						</button>

						<div className="h-20 overflow-y-auto">
							{expandedTopics.includes(topic) && (
								<div className>
									<ul className="list-disc ml-6">
										{subtopics.map((subtopic) => (
											<li key={subtopic} className="text-gray-700">
												{subtopic}
											</li>
										))}
									</ul>
									<hr className="border-t border-gray-300 mt-2" />
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
